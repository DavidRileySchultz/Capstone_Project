using Microsoft.EntityFrameworkCore.Migrations;

namespace Capstone_Project.Migrations
{
    public partial class fixedtablename : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Traverllers",
                table: "Traverllers");

            migrationBuilder.RenameTable(
                name: "Traverllers",
                newName: "Travellers");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Travellers",
                table: "Travellers",
                column: "TravellerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Travellers",
                table: "Travellers");

            migrationBuilder.RenameTable(
                name: "Travellers",
                newName: "Traverllers");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Traverllers",
                table: "Traverllers",
                column: "TravellerId");
        }
    }
}
