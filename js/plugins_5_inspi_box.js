function majDisplayedQuote()
{
	var nbQuotes = tabQuotes.length;
			
	// Si on en est à la dernière citation actuellement affichée, on réinitialise à 0 l'indexDisplayedQuote
	if(indexDisplayedQuote == (nbQuotes-1))
	{
		indexDisplayedQuote = 0;
	}
	else
	{
		indexDisplayedQuote++;
	}
	
	$(".quoteWrapper .inspirationQuote").html(tabQuotes[indexDisplayedQuote][0]);
	$(".quoteWrapper .quoteAuthor").html(tabQuotes[indexDisplayedQuote][1]);	
}