# Interest and Loan Widget

With this widget it is possible to calculate interest based on the purpose of your loan, the type of business, the amount you want to borrow and the time you want to repay it.

<img src="https://github.com/muise001/React-Widget/blob/master/widget.png" alt="First view of the widget"/>

## Technical Challenges
While creating this widget, I ran into a few technical difficulties. Below I explain what those difficulties were and how I solved them.

### Scalability
To make this widget better than others, I wanted this widget to be very scalable. So if, for example, you add a dataset that is many times larger and contains other values, the widget still works well.

A difficulty I encountered was that I had to take every possibility concerning the database into account. I started writing large functions for all these posibilities. This took alot of time and turned out not to be the most efficient nor reliable code. It worked kind of, but still didn't have all the features I had in mind for it. That's when I started with refactoring it. First I wrote down what it was that I realy wanted. First I started to think about what I really wanted with that function. First I started writing down all the functionalities it should have. After that I started looking up [videos](https://www.youtube.com/watch?v=rRgD1yVwIvE&t=642s) about `.forEach, .map, .filter, .reduce` to refresh my memory. After this I was able to rewrite my code well. Unfortunately, it is still not the most efficient code, but it is almost 20 percent shorter, so more efficient.

### Feedback
After I refactored the code (I was talking about above), was it that if you had entered one of the two dropdowns (selects), the second one automatically gave the options that were associated with the previously entered dropdown. The only flaw in my design was that once you choose your value in a dropdown, you were never available to undo it. That's when I added "remove-icons" on the side of the dropdown. 

<img src="https://github.com/muise001/React-Widget/blob/master/optionality%20to%20delete.png" alt="Remove value button"/>

Another flaw was that if you wanted to calculate your loan, you could do that even tough you didn't even enter the type of business or goal. That's why I also added a little feedback-popup under the call-to-action button.

<img src="https://github.com/muise001/React-Widget/blob/master/feedback.png" alt="Feedback to premature call-to-action"/>

### Fun
What says more about "money" than money? 

To add something fun into the widget, I created an animation in the background of the "result-popup". In this pop-up you read how much interest you have to pay over how many months. See the preview below!

<img src="https://github.com/muise001/React-Widget/blob/master/makeItRain.gif" alt="Fun feedback"/>



