using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ModalHelp.DBContent
{
    public class EurekaDeveloperDB : DbContext
    {
        public EurekaDeveloperDB()
        : base("name=EurekaDeveloper")
        {
        }

        public virtual DbSet<HelpModals> HelpModals { get; set; }
        public virtual DbSet<Icons> Icons { get; set; }
        public virtual DbSet<InfoIcons> InfoIcons { get; set; }
        public virtual DbSet<Modules> Modules { get; set; }
        public virtual DbSet<Views> Views { get; set; }
    }
}