Vue.component ('movielist', {
template :
// '<div> <movie v-for="movie in movies"> {{movie.url} </movie> </div>',
`

<div  class="grid" id="mov">
	<div class="grid-sizer"></div>
	<div v-for="movie in movies" class="grid-item">
		<a href="">
			<img :src="movie.url" :alt="movie.alt" />
		</a>
	</div>
</div>

`,
data () {
	return {
	movies : 	[
		{ url: 'asset/img/movie2.jpg', alt: 'I love you nature' },
		{ url: 'asset/img/movie3.jpg', alt: 'I love you nature' },
		{ url: 'asset/img/movie22.jpg', alt: 'I love you nature' },
		{ url: 'asset/img/movie10.jpg', alt: 'I love you nature' },
		{ url: 'asset/img/movie11.jpg', alt: 'I love you nature' },
		{ url: 'asset/img/movie7.jpg', alt: 'I love you nature' },
		{ url: 'asset/img/movie8.jpg', alt: 'I love you nature' },
		{ url: 'asset/img/movie9.jpg', alt: 'I love you nature' },
				]
			}
		},

		mounted() {

		setTimeout(function(e) {
			var $grid = $('.grid').masonry({
				  itemSelector: '.grid-item',
				  percentPosition: true,
				  columnWidth: '.grid-sizer'
				});
		}, 200)

		}
});


new Vue({
el :'#root'
});