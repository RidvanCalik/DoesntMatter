namespace doesntmatter.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public int OwnerID { get; set; }
        public DateTime CommentUpdateDate { get; set; }
        public byte OwnerScore { get; set; }
        public string OwnerComment { get; set; }
    }
}
