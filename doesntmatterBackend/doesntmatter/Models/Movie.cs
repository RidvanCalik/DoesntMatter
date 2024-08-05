using System.ComponentModel;

namespace doesntmatter.Models
{
    public class Movie
    {


        public int Id { get; set; }
        public string imdbID { get; set; }
        public string Title { get; set; }
        public string Plot { get; set; }
        public DateTime? Released { get; set; }
        public int Runtime { get; set; }//defined by minute
        public string Director { get; set; }
        public string[]? Actors { get; set; }
        public string Writer { get; set; }
        public int? BoxOffice { get; set; }
        public string Poster { get; set; }
        public string? Awards { get; set; }
        public List<Ratings>? Ratings { get; set; }
        public string[] Genre { get; set; }


        public byte? Score { get; set; }
        public int[]? Comments { get; set; }


    }


}
