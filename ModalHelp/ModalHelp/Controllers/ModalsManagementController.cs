using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ModalHelp.DBContent;
using ModalHelp.Models;
using Newtonsoft.Json;

namespace ModalHelp.Controllers
{
    public class ModalsManagementController : Controller
    {
        EurekaDeveloperDB db = new EurekaDeveloperDB();

        // MODULOS
        public ActionResult ModulesList()
        {
            try
            {
                Modules_Model model = new Modules_Model();
                List<Modules> modules = new List<Modules>();
                modules = db.Modules.ToList();

                model.Modules = modules;
                return PartialView(model);
            }
            catch
            {
                return View("~/Views/Shared/Error.cshtml");
            }
        }

        public ActionResult Module(Modules module)
        {
            try
            {
                Module_Model model = new Module_Model();
                model.Module = module;
                List<Views> views = new List<Views>();
                views = db.Views.Where(x => x.IdModule == module.Id).ToList();
                model.Views = views;

                return PartialView(model);
            }
            catch
            {
                return View("~/Views/Shared/Error.cshtml");
            }
        }

        public string CreateModule(string name)
        {
            AjaxData aj;
            try
            {
                Modules module = new Modules();
                module.Name = name;

                Modules existente = db.Modules.FirstOrDefault(x => x.Name == name);
                if (existente != null)
                {
                    aj = new AjaxData()
                    {
                        Successful = false,
                        CustomError = "183",
                        Text = "El módulo con el nombre especificado ya existe"
                    };
                }
                else
                {
                    db.Modules.Add(module);
                    db.SaveChanges();

                    Modules newModule = db.Modules.FirstOrDefault(x => x.Name == name);

                    aj = new AjaxData()
                    {
                        Successful = true,
                        CustomError = "",
                        Data = newModule
                    };
                }

            }
            catch (Exception e)
            {
                aj = new AjaxData()
                {
                    Successful = false,
                    CustomError = "Ha habido un error al crear un módulo",
                    Text = "Excepción: " + e.ToString()
                };
            }
            return JsonConvert.SerializeObject(aj);
        }

        public string DeleteModule(int id)
        {
            AjaxData aj;
            try
            {
                Modules module = db.Modules.FirstOrDefault(x => x.Id == id);

                db.Modules.Remove(module);
                db.SaveChanges();

                aj = new AjaxData()
                {
                    Successful = true,
                    CustomError = "",
                    Text = "Correct"
                };
            }
            catch (Exception e)
            {
                aj = new AjaxData()
                {
                    Successful = false,
                    CustomError = "Ha habido un error al eliminar un módulo",
                    Text = "Excepción: " + e.ToString()
                };
                throw;
            }
            return JsonConvert.SerializeObject(aj);
        }

        // VISTAS
        public ActionResult View(Views view)
        {
            try
            {
                return PartialView(view);
            }
            catch
            {
                return View("~/Views/Shared/Error.cshtml");
            }
        }

        public string CreateView(string name, int idModule)
        {
            AjaxData aj;
            try
            {
                Views view = new Views();
                view.Name = name;

                Views existente = db.Views.FirstOrDefault(x => x.Name == name && x.IdModule == idModule);
                if (existente != null)
                {
                    aj = new AjaxData()
                    {
                        Successful = false,
                        CustomError = "183",
                        Text = "La vista con el nombre especificado ya existe en el módulo seleccionado"
                    };
                }
                else
                {
                    db.Views.Add(view);
                    db.SaveChanges();

                    Views newView = db.Views.FirstOrDefault(x => x.Name == name && x.IdModule == idModule);

                    aj = new AjaxData()
                    {
                        Successful = true,
                        CustomError = "",
                        Data = newView
                    };
                }

            }
            catch
            {
                aj = new AjaxData()

                {
                    Successful = false,
                    CustomError = "",
                    Text = ""
                };
            }
            return JsonConvert.SerializeObject(aj);
        }

    }
}