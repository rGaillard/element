import parseDuration from 'parse-duration'

export default function duration(d: string | number) {
	if (typeof d === 'string') {
		return parseDuration(d)
	} else if (typeof d === 'number' && d < 1e3) {
		return d * 1e3
	} else {
		return d
	}
}
