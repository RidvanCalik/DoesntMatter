using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using doesntmatter.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<doesntmatterContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("doesntmatterContext") ?? throw new InvalidOperationException("Connection string 'doesntmatterContext' not found.")));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
const string ALLOW_LOCALHOST_CORS = "localhostCors";
builder.Services.AddCors(options =>
{
   options.AddPolicy(name: ALLOW_LOCALHOST_CORS,
                      policy =>
                      {
                          policy.WithOrigins("*");
                      });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(ALLOW_LOCALHOST_CORS);
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
