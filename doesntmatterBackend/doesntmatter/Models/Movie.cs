using System.ComponentModel;

namespace doesntmatter.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string MovieName { get; set; }
        public string MovieDescription { get; set; }
        public string MoviePoster { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string YoutubeTrailerLink { get; set; }
        public byte Score { get; set; }
        public string[] Categories { get; set; }
        public int[] Comments { get; set; }


    }
}
