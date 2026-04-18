---
title: "Go defers run LIFO — last in, first out"
date: 2026-04-15
categories: [Backend]
---

Obvious in hindsight but I had to look it up: multiple `defer` calls in the same function run in reverse order when the function returns.

```go
func main() {
    defer fmt.Println("first")
    defer fmt.Println("second")
    defer fmt.Println("third")
}
// Output:
// third
// second
// first
```

This matters for cleanup. If you open a file and then acquire a lock, the natural defer order closes the file first — wrong. You'd want the lock released first. So the order you write defers matters.

Also: defer arguments are evaluated immediately, not when the deferred function runs.

```go
x := 1
defer fmt.Println(x) // captures 1, not whatever x is at return
x = 2
```

Both of these have burned me before.
