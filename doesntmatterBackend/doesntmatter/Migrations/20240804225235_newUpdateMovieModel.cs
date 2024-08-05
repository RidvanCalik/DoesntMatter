using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace doesntmatter.Migrations
{
    /// <inheritdoc />
    public partial class newUpdateMovieModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "id",
                table: "Ratings",
                newName: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Ratings",
                newName: "id");
        }
    }
}
