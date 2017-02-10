﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace FacturasManager
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(LogLevel.Debug);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true,
                    ConfigFile = "webpack.config.js" //mi archivo
                });
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();
            ConfigureRoutes(app);
        }

        private void ConfigureRoutes(IApplicationBuilder app)
        {
            // If the route contains '.' then assume a file to be served
            // and try to serve using StaticFiles
            // if the route is spa route then let it fall through to the
            // spa index file and have it resolved by the spa application
            app.MapWhen(context =>
            {
                var path = context.Request.Path.Value;
                return !path.Contains(".");
            },
            spa =>
            {
                spa.Use((context, next) =>
                {
                    context.Request.Path = new PathString("/" + "index.html");
                    return next();
                });

                spa.UseStaticFiles();
            });

        }
    }
}
