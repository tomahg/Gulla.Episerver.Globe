using EPiServer.Shell.Modules;
using Microsoft.Extensions.DependencyInjection;

namespace Gulla.Episerver.Globe
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddGlobe(this IServiceCollection services)
        {
            services.Configure<ProtectedModuleOptions>(o => o.Items.Add(new ModuleDetails { Name = "Gulla.Episerver.Globe" }));
            return services;
        }
    }
}
