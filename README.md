# Front End Nanodegree Program

## Landling Page Table of Contents

* [Overview](#Overview)
* [Html](#Html)
* [Css](#Css)
* [JavaScript](#JavaScript)

<br />

## Overview
This project aims to apply the learning outcomes from the past part of the course in it by introducing some new features to the existence webpage using javaScript. Briefly theses features are: create navigation bar, determine the active section, then change its appearance, and finally target each section from the navigation items.

<br />

## Html
Here I just added another (copy/paste with little changes) section to the 3 existenese ones just to meet the requirement to have atleast 4 sections. I added also the javaScript source file at the end after the footer and before ending the body.

<br />

## Css

I just added a feature of making the scroll smooth in html tag

<br />

## JavaScript

I just implemented these functions to meet the project requirement, they implemented successfully, interms of logical and syntax aspects.

* [createListItem](##createListItem)
* [sectionActivateState](##sectionActivateState)
* [circledActiveSection](##circledActiveSection)
* [highlightedActiveSection](##highlightedActiveSection)

<br />

### createListItem
It is a helper function used to generate the navigation bar for the existing sections to be easily scrolling between them by just clicking on each item. Time Complexity is O(N) where N here is the number of sections. Finally, this function just called once outside any function scope. 

<br />

### sectionActivateState
Here, it is a funchtion which just returned that wether the seaction is in viewport or not. Finally, the function is called within the circledActiveSection() function scope.Time Complexity is O(1) as it is just return yes or no.

<br />

### circledActiveSection
It is a function which activate the current user's stop on section and apply the background appearance of the active section style that was implemented in styles.css file. Time Complexity is O(N) where N here is the number of sections. Finally, this function just called once outside any function scope. So, overall the program has a Time Complexity of O(N).

<br />

### chighlightedActiveSection
It is the final function which activate the current user's stop on section and apply the background appearance of the active section style on the navigation bar. Time Complexity is O(N) where N here is the number of sections. Finally, this function just called once outside any function scope. So, overall the program has a Time Complexity of O(N).
  