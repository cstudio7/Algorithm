








class Solution {
    public int lengthOfLongestSubstring(String s) {

    if (s == null || s.length() == 0) return 0;

    Set<Character> set = new HashSet<>();
    int start = 0, maxSize = Integer.MIN_VALUE;

    for (int i = 0; i < s.length(); i++) {

    maxSize = Math.max(maxSize, set.size());

    while (set.contains(s.charAt(i))) {
    set.remove(s.charAt(start));
    start++;
}
set.add(s.charAt(i));
}
maxSize = Math.max(maxSize, set.size());
return maxSize;

}
}
