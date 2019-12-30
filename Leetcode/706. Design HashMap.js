logo
Explore
Problems
Mock
Contest
Articles
Discuss
Store
🎊 Best of 2019 🎊

Premium
0
Description
Solution
Submissions
Discuss (294)
706. Design HashMap
Easy

537

80

Add to List

Share
Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

Example:

MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);          
hashMap.put(2, 2);         
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1 
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found) 

Note:

All keys and values will be in the range of [0, 1000000].
The number of operations will be in the range of [1, 10000].
Please do not use the built-in HashMap library.
Accepted
60,101
Submissions
103,527
Seen this question in a real interview before?

Yes

No
Contributor
1337c0d3r

Problems

Pick One

Prev
/1

Next






1
/**
2
 * Initialize your data structure here.
3
 */
4
var MyHashMap = function() {
5
    this.map = {}
6
};
7
​
8
/**
9
 * value will always be non-negative. 
10
 * @param {number} key 
11
 * @param {number} value
12
 * @return {void}
13
 */
14
MyHashMap.prototype.put = function(key, value) {
15
    this.map[key] = value
16
};
17
​
18
/**
19
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
20
 * @param {number} key
21
 * @return {number}
22
 */
23
MyHashMap.prototype.get = function(key) {
24
    return this.map[key] === undefined ? -1 : this.map[key] 
25
};
26
​
27
/**
28
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
29
 * @param {number} key
30
 * @return {void}
31
 */
32
MyHashMap.prototype.remove = function(key) {
33
    delete this.map[key]
34
};
35
​
36
/** 
37
 * Your MyHashMap object will be instantiated and called as such:
38
 * var obj = new MyHashMap()
39
 * obj.put(key,value)
40
 * var param_2 = obj.get(key)
41
 * obj.remove(key)
42
 */
Your previous code was restored from your local storage.
Reset to default
Console 
Contribute

Run Code

Submit
Type here...(Markdown is enabled)
​
Saved
search problems



Attempted
#207 Course Schedule
Medium
