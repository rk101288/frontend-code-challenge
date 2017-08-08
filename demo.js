function swapPicture() {
	var prefix = "hermione",
		suffix = ".jpg",
		currentImage = document.getElementById("hermione-image"),
		regex = /hermione([0-9]).jpg/;

	// Matches the regular expression to extract the number from the image's filename. Image path will have the absolute path.
	var match = regex.exec(currentImage.src.substring(currentImage.src.lastIndexOf("/")));  
	var currentIndex = match[1];
	currentIndex++;

	//TODO #8
	// It seems clicking on the image more than a few times causes it to disappear!
	// If the currentIndex is greater than 3, lets reset it to 1;
	currentImage.src = prefix + currentIndex + suffix;
}