namespace Fiz.Modules
{
    public class Materials
    {
        string id;
        string material;
        string localizacion;
        int fecha;

        public Materials (string id, string material, string localizacion, int fecha)
        {
            this.id = id;
            this.material = material;
            this.localizacion = localizacion;
            this.fecha = fecha;
        }

        public string Id {get => id; set =>id = value; }
        public string Material {get => material; set =>material = value; }
        public string Localizacion {get => localizacion; set =>localizacion = value; }
        public int Fecha {get => fecha; set =>fecha = value; }
    }
}