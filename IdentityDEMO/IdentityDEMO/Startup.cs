using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(IdentityDEMO.Startup))]
namespace IdentityDEMO
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
