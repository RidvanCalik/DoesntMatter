using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace doesntmatter.Migrations
{
    /// <inheritdoc />
    public partial class updateMovieModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "YoutubeTrailerLink",
                table: "Movie",
                newName: "Writer");

            migrationBuilder.RenameColumn(
                name: "ReleaseDate",
                table: "Movie",
                newName: "Released");

            migrationBuilder.RenameColumn(
                name: "MoviePoster",
                table: "Movie",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "MovieName",
                table: "Movie",
                newName: "Poster");

            migrationBuilder.RenameColumn(
                name: "MovieDescription",
                table: "Movie",
                newName: "Plot");

            migrationBuilder.RenameColumn(
                name: "Categories",
                table: "Movie",
                newName: "Genre");

            migrationBuilder.AddColumn<string>(
                name: "Actors",
                table: "Movie",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "[]");

            migrationBuilder.AddColumn<string>(
                name: "Awards",
                table: "Movie",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "BoxOffice",
                table: "Movie",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Director",
                table: "Movie",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Runtime",
                table: "Movie",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "imdbID",
                table: "Movie",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Ratings",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Source = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MovieId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ratings", x => x.id);
                    table.ForeignKey(
                        name: "FK_Ratings_Movie_MovieId",
                        column: x => x.MovieId,
                        principalTable: "Movie",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_MovieId",
                table: "Ratings",
                column: "MovieId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Ratings");

            migrationBuilder.DropColumn(
                name: "Actors",
                table: "Movie");

            migrationBuilder.DropColumn(
                name: "Awards",
                table: "Movie");

            migrationBuilder.DropColumn(
                name: "BoxOffice",
                table: "Movie");

            migrationBuilder.DropColumn(
                name: "Director",
                table: "Movie");

            migrationBuilder.DropColumn(
                name: "Runtime",
                table: "Movie");

            migrationBuilder.DropColumn(
                name: "imdbID",
                table: "Movie");

            migrationBuilder.RenameColumn(
                name: "Writer",
                table: "Movie",
                newName: "YoutubeTrailerLink");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Movie",
                newName: "MoviePoster");

            migrationBuilder.RenameColumn(
                name: "Released",
                table: "Movie",
                newName: "ReleaseDate");

            migrationBuilder.RenameColumn(
                name: "Poster",
                table: "Movie",
                newName: "MovieName");

            migrationBuilder.RenameColumn(
                name: "Plot",
                table: "Movie",
                newName: "MovieDescription");

            migrationBuilder.RenameColumn(
                name: "Genre",
                table: "Movie",
                newName: "Categories");
        }
    }
}
