function startTicker()

{

	// Define run time values

	theCurrentStory     = -1;

	theCurrentLength    = 0;

	// Locate base objects

	if (document.getElementById) {	

		    theAnchorObject     = document.getElementById("TickerLink");

			runTheTicker();   	

		 }

	else {

            return true;

	}

}

// Ticker main run loop

function runTheTicker()

{

	var myTimeout;  

	// Go for the next story data block

	try

	{

	if(theCurrentLength == 0)

	{               

		theCurrentStory++;

		theCurrentStory      = theCurrentStory % theItemCount;

		theStorySummary      = theSummaries[theCurrentStory].replace(/&quot;/g,'"');		

		theTargetLink        = theSiteLinks[theCurrentStory];

		theAnchorObject.href = theTargetLink;

		thePrefix 	     = "<span class=\"tickls\">" + theLeadString + "</span>";

	}

	}

	catch(err)

	{

	}

	// Stuff the current ticker text into the anchor

	theAnchorObject.innerHTML = thePrefix +

	theStorySummary.substring(0,theCurrentLength) + whatWidget();

	// Modify the length for the substring and define the timer

	if(theCurrentLength != theStorySummary.length)

	{

		theCurrentLength++;

		myTimeout = theCharacterTimeout;

	}

	else

	{

		theCurrentLength = 0;

		myTimeout = theStoryTimeout;

	}

	// Call up the next cycle of the ticker

	setTimeout("runTheTicker()", myTimeout);

}

// 

function whatWidget()

{

	if(theCurrentLength == theStorySummary.length)

	{

		return theWidgetNone;

	}



	if((theCurrentLength % 2) == 1)

	{

		return theWidgetOne;

	}

	else

	{

		return theWidgetTwo;

	}

}