// * Daily Coding Problem Jan 27 2020

// * [Easy] -- Facebook

// * Given a function f, and N return a debounced f of N milliseconds.

// * That is, as long as the debounced f continues to be invoked, f itself will not be called for N milliseconds.
package debounce

import "time"

// Debounced returns a "debounced" function that will get executed N milliseconds after it is called.
func Debounced(f func(), n int) func() {
	initTime := time.Now()
	// * Return a callback function that gets the time, compares the elapsed time since it got created
	// * If enough time has elapsed then execute the callback function
	return func() {
		now := time.Now()
		elapsed := int(now.Sub(initTime) / time.Millisecond)
		if elapsed > n {
			f()
		}
	}
}