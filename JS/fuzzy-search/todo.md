## Goal
## Make a fuzzy search throughout the website

1. Create an html data -- text, images etc. Fill out page
2. Cache text, links data into JS
3. Create sort of pointers to cached places - #id's link or something else
4. When typing, filter data and show relevant results
5. Data and pointers can be stored in objects, all data -- in array


## How to do it?
- Automatically generate id's for most important text elements, links and data
- create a smooth page scroll: body behavior smooth
- save full url: window.location.href and scroll towards it

# Test things out on simple page first: 
- create few headings, few links, few text subtitles
- generate id's for them, or create data-attributes
- element's position can be calculated by element.offsetTop and scroll to it

## Advanced features
1. Show recent results at the top of the search