---
title: Unique Test Data
articleGroup: Examples
gettingStartedOrder: 2
position: 2
---


If you're planning to [use test data](/docs/1.0/getting-started/08-test-data) in a load test with Element, it's worth thinking about data uniqueness and whether that will affect your test. Each instance of Element runs independently of any other instance, so there's a chance that your data will be used by more than one instance at a time. This may not always be a problem, but if you're scripting a user login, for example, and your application doesn't allow a user to have more than one session, you may want to keep reading.

There are a few approaches to this. Let's go over them in increasing complexity.

## Include a large data set

The first option is to use as large a data set as possible and have Element randomly pick a user from that list. If you are able to easily scrape user credentials from your database, or better yet, create users to use specifically for load testing, this can be a great option. Technically, there's still a chance that two instances of Element will randomly pick the same user, but if your data set is large enough compared to the number of Element users you're running (say, 100,000 logins vs 100 users), the chance of this happening will be pretty small. Other than preparation of the data, you won't have to change your script much.

You can set this up using this:

```typescript
interface UserData {
	id: string,
	username: string,
	password: string
}

TestData.fromCSV<UserData>('users.csv')
				.circular()
				.shuffle()
```

You'll just need to make sure that you add the `.shuffle()`. This will randomly rearrange the data file and then iterate sequentially through them, effectively choosing lines at random.

Using a value is unchanged:

```typescript
step('Login', async (browser: Driver, data: UserData) => {
	//Type user credentials
	await browser.type(By.xpath('//*[contains(@id, "email-address")]'),`${data.username}`)
	await browser.type(By.xpath('//*[contains(@id, "password")]'),`${data.username}`)

	//Click Sign In button
	let btnSignIn = await browser.findElement(By.xpath('//*[contains(@type, "submit")]'))
	await btnSignIn.click()

	//Validate text
	let validation = By.visibleText('Welcome, Nicole')
	await browser.wait(Until.elementIsVisible(validation))
	await browser.takeScreenshot()
})
```

## Partition data per user and have multiple CSVs

This option is if you have a small number of users you'd like to run and you want each user to have a pool of accounts to choose from. In this case, you can create a separate user file for each user: users1.csv, users2.csv, ... users10.csv and then put the pool of accounts you want each user to log in with. So each CSV could have 50 accounts.

To set this up you'll need to use an environment variable. An environment variable is set by Element and contains values regarding the test itself, the grids, and the nodes. First you'll need to import `ENV` by adding it to your initial import statement from `@flood/element`:

```typescript
import { step, TestSettings, Until, By, Browser, TestData, ENV } from '@flood/element'
```

You can also read more about ENV in [our API documentation](/docs/1.0/api/DSL).

Next you'll help Element determine which user file to use:

```typescript
interface UserData {
	id: string,
	username: string,
	password: string
}

TestData.fromCSV<UserData>('users' + ENV.BROWSER_ID + '.csv')
	.circular()
```


This will change the the CSV that is opened by each browser. Instead of always opening `users.csv`, Element will first determine the `BROWSER_ID` of the instance. The browser ID starts with 1 and is unique across the node. So the first browser or user of Element (we sometimes use the terms interchangeably) will have a `BROWSER_ID = 1`, which means it will open `users1.csv`.

There's no change to how you use the data in the relevant step.

## Use globally unique IDs to filter one data file

The problem with the previous option is that the browser ID is unique _per node_, which means that if you're planning to run a load test with more than one node, the second node will be using the same users that the first one is. That option is also not great for larger numbers of users, as having 1000 users would also require 1000 separate CSV files, which would quickly get unwieldy. So what can you do?

You can use a combination of two environment variables to create a variable that is globally unique. In this case, I used the Flood grid node sequence ID and the browser ID, which I call the global browser ID:

```typescript
const globalBrowserID = ENV.FLOOD_GRID_NODE_SEQUENCE_ID + '_' + ENV.BROWSER_ID
interface UserData {
	id: string,
	username: string,
	password: string
}

TestData.fromCSV<UserData>('users.csv')
				.filter((line, index, browserID) => line.id === globalBrowserID)
      	.circular()
```

You'll notice we're using a single users.csv file and filtering each line from the CSV to find one where the id column matches the global browser ID. This means the CSV will also need to be changed to be in this format:

```csv
id,username,password
0_0,user1,password1
0_1,user2,password2
0_2,user3,password3
...
1_1,user51,password51
...
```

You can use Excel to quickly generate the id column depending on how many nodes and browsers per node you need. Then you can simply call the username and password variables in your script as normal. When you run the Element script on Flood, you'll get each browser picking a globally unique user and then repeatedly iterating through the script with the same user for the whole test. If you want each browser to have more than one user to choose from, simply double up the lines in the CSV so that you have more that one value for username and password for each id:

```csv
id,username,password
0_0,user1,password1
0_0,user2,password2
```

Note that both the sequence ID and the browser ID start with 0 when run through Flood, but when run locally using the Element CLI, they will both start with 1. This is a known bug that is on our backlog to fix.

We ran a sample script through Flood with this scenario, which [you can view](https://api.flood.io/JpQt7Xga) without signing up. All it contains is a single step that prints the username and password (along with the global browser ID) to the log. You can inspect these messages by clicking on the Logs tab of that flood. You can also download the script and data files from our [load testing playground repository](https://github.com/flood-io/load-testing-playground/tree/master/element/test-data) and modify it to fit your use case.
