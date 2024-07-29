using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace doesntmatter.Migrations
{
    /// <inheritdoc />
    public partial class updatemovies : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comment_Movie_MovieId",
                table: "Comment");

            migrationBuilder.DropIndex(
                name: "IX_Comment_MovieId",
                table: "Comment");

            migrationBuilder.DropColumn(
                name: "MovieId",
                table: "Comment");

            migrationBuilder.AddColumn<string>(
                name: "Comments",
                table: "Movie",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "[]");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Comments",
                table: "Movie");

            migrationBuilder.AddColumn<int>(
                name: "MovieId",
                table: "Comment",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Comment_MovieId",
                table: "Comment",
                column: "MovieId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_Movie_MovieId",
                table: "Comment",
                column: "MovieId",
                principalTable: "Movie",
                principalColumn: "Id");
        }
    }
}
