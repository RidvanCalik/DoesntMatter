using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using doesntmatter.Models;
using System.Configuration;

namespace doesntmatter.Data
{
    public class doesntmatterContext : DbContext
    {
        public doesntmatterContext (DbContextOptions<doesntmatterContext> options)
            : base(options)
        {
        }
        
     

        public DbSet<doesntmatter.Models.Movie> Movie { get; set; } = default!;
        public DbSet<doesntmatter.Models.Comment> Comment { get; set; } = default!;
        public DbSet<doesntmatter.Models.User> User { get; set; } = default!;
    }
}
