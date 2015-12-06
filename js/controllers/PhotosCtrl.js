app.controller('PhotosCtrl',
	['$scope',
	function($scope){
		$scope.rawFeed = instagramResponse;

		$scope.filters = function(){
			var allFilters = [];
			for(var i=0;i < $scope.rawFeed.data.length;i++){
				allFilters.push($scope.rawFeed.data[i].filter);
			}
			// Helpful unique filter: http://stackoverflow.com/questions/1960473/unique-values-in-an-array
			function onlyUnique(value, index, self) { 
				return self.indexOf(value) === index;
			}
			var unique = allFilters.filter( onlyUnique );
			return unique;
		};

		$scope.hashtags = function(){
			var allTags = [];
			for(var j=0;j< $scope.rawFeed.data.length;j++){
				for(var k=0;k<$scope.rawFeed.data[j].tags.length;k++){
					allTags.push($scope.rawFeed.data[j].tags[k]);
				}
			}
			return allTags;
		}

		// For pagination, the number of items to 
		// show per page.
		$scope.itemsPerPage = 12;

		// This is changed dynamically to show which page we're currently on.
		$scope.currentPage = 0;

		// QUESTION: There has to be a simpler way to do this
		// in practice. No?
		$scope.pagedItems = function(){
			paged = [];
			tempPage = [];
			currentItem = 0;
			// Iterate through all of our pictures.
			for(var i=0;i< $scope.rawFeed.data.length;i++){
				// Check if we've reached one page yet.
				if(currentItem == $scope.itemsPerPage){
					// If so then push the temp page into our paged array
					// and reset everything.
					paged.push(tempPage);
					tempPage = [];
					currentItem = 0;
				}
				currentItem++;
				tempPage.push($scope.rawFeed.data[i])
			}
			// If there's anything left over then add it to the last page.
			if(tempPage.length > 0){
				paged.push(tempPage);
			}
			// Return our paged items
			return paged;
		};


	}]);