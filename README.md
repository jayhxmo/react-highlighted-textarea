# React Highlighted Textarea
React component for a Textarea that supports highlighting.

## Usage
```javascript
function doHighlight(input) {
    // return array or regex
}

<HighlightedTextarea highlight={doHighlight} />
```

###### Array
```javascript
function doHighlight(input) {
    return [
      [0, 5],
      [17, 28],
      [40, 60]
    ];
}
```

###### Regex
```javascript
function doHighlight(input) {
    return /\w+/g;
}
```

A React port of https://github.com/lonekorean/highlight-within-textarea
