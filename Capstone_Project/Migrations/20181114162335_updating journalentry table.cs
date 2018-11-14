using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Capstone_Project.Migrations
{
    public partial class updatingjournalentrytable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PubDate",
                table: "JournalEntries");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "JournalEntries",
                newName: "UploadedImage");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UploadedImage",
                table: "JournalEntries",
                newName: "Name");

            migrationBuilder.AddColumn<DateTime>(
                name: "PubDate",
                table: "JournalEntries",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
