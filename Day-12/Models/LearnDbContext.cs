using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Day_12.Models
{
    public partial class LearnDbContext : DbContext
    {
        public LearnDbContext()
        {
        }

        public LearnDbContext(DbContextOptions<LearnDbContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            #warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
            optionsBuilder.UseMySql("server=127.0.0.1;port=3306;database=LearnDB;uid=root;pwd=manoharmeena", 
                MySqlServerVersion.Parse("8.0.32-mysql"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
