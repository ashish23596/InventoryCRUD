using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using InventorywebAPI.Models;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;


namespace InventorywebAPI.Controllers
{
    public class InventoryController : ApiController
    {

        public HttpResponseMessage Get()
        {
            DataTable table = new DataTable();
            string query = @"select ItemID,ItemName,Description,Price from Inventory";
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["EmployeeAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public string Post(Inventory inv)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"insert into Inventory values('" + inv.ItemName + @"','" + inv.Description + @"','" + inv.Price + @"')";
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["EmployeeAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }


                return "Added successfully";
            }
            catch
            {
                return "Failed to added";
            }
        }

        public string Put(Inventory inv)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"update dbo.Inventory set ItemName ='" + inv.ItemName + @"',
                                                          Description ='" + inv.Description + @"',
                                                          Price ='" + inv.Price + @"'
                                 where ItemID = " + inv.ItemID + @"
                                ";

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["EmployeeAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }


                return "Updated successfully";
            }
            catch
            {
                return "Failed to Update";
            }
        }

        public string Delete(int id)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"delete from dbo.Inventory
                                 where ItemID = " + id;

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["EmployeeAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }


                return "Deleted successfully";
            }
            catch
            {
                return "Failed to Delete";
            }
        }
    }
}
