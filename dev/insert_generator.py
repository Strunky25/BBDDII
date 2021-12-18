from faker import Faker
import random as rand
# url
import json
import urllib.request
import string
import api
import datetime
import hashlib
from datetime import timedelta
from dateutil.relativedelta import relativedelta

INSERT = "INSERT INTO tabla (columnas) VALUES ;"
NOMBRE_USUARIS = 300
NUM_VIDEOS = 150
TIPUS_USUARIS = ['Infantil', 'Adolescent', 'Adult'] #realment no empram s'array per res XD
TIPUS_CONTRACTE = ['Mensual', 'Trimestral']
CATEGORIES = ['Acción', 'Actualidad', 'Adulto', 'Aventuras', 'Animación', 'Anime', 'Binge', 'Biografía', 'Ciencia ficción', 'Comedia', 'Concurso', 'Corto', 'Crimen', 'Deporte', 'Documental',
              'Drama', 'Estilo de vida', 'Familiar', 'Fantasía', 'Ficción', 'Guerra', 'Historia', 'Horror', 'Infantil', 'Juvenil', 'Música', 'Musical', 'Misterio', 'Programa de entrevistas', 'Reality Show',
              'Romance', 'Sátira', 'Suspense', 'Western']
start_date = datetime.date(2015, 1, 1)
end_date = datetime.date(2021, 12, 31)
usuaris = list()

# TipusUsuari i tipusContracte


def generar_constants(file):
    insert_tipus_usuari = INSERT.replace("tabla", "tipusUsuari")
    insert_tipus_usuari = insert_tipus_usuari.replace("columnas", "tipusUsuari")
    insert_tipus_usuari = insert_tipus_usuari.replace(";","(\'infantil\'),(\'adolescent\'),(\'adult\');")
    file.write(insert_tipus_usuari +"\n")
    insert_tipus_contracte = INSERT.replace("tabla", "tipusContracte")
    insert_tipus_contracte = insert_tipus_contracte.replace("columnas", "tipusContracte, preu")
    insert_tipus_contracte = insert_tipus_contracte.replace(";", "(\'mensual\',15),(\'trimestral\',40);")
    file.write(insert_tipus_contracte + "\n")


def generar_usuaris(file, faker):
    insert_usuaris = INSERT.replace("tabla", "Usuari")
    insert_usuaris = insert_usuaris.replace(
        "columnas", "nomUsuari, contrasenya, nom, llinatges, tipusUsuari")
    
    usuari_contrassenya = ""
    

    insert_usuaris = insert_usuaris.replace("columnas", "nomUsuari, contrasenya, nom, llinatges, tipusUsuari")

    for i in range(NOMBRE_USUARIS):
        usuario = faker.user_name()
        while usuario in usuaris:  # Nos aseguramos de que los usuarios sean unicos
            usuario = faker.user_name()
        usuaris.append(usuario)
        nombre = faker.first_name()
        apellido = faker.last_name()
        password = faker.password()
        usuari_contrassenya += usuario + "\t" + password + "\n"
        hashed_pass = hashlib.sha256(password.encode()).hexdigest()
        tip = TIPUS_USUARIS[rand.randint(0, 2)]
        insert_usuaris = insert_usuaris.replace(";", f', (\'{usuario}\',\'{hashed_pass}\',\'{nombre}\',\'{apellido}\',\'{tip}\');')
    insert_usuaris = insert_usuaris.replace("VALUES ,", "VALUES ")
    with open("contrassenyes.txt", "w") as contras:
        contras.write(usuari_contrassenya)
    file.write(insert_usuaris+ "\n")


def generar_categoria(file):
    insert_categoria = INSERT.replace("tabla", "Categoria")
    insert_categoria = insert_categoria.replace("columnas", " nomCategoria")
    for i in range(len(CATEGORIES)):
        nomCategoria = CATEGORIES[i]
        insert_categoria = insert_categoria.replace(";", f', (\'{nomCategoria}\');')
    insert_categoria = insert_categoria.replace("VALUES ,", "VALUES ")
    file.write(insert_categoria+ "\n")


def generar_contingut(file):
    insert_contingut = INSERT.replace("tabla", "Contingut")
    insert_contingut = insert_contingut.replace("columnas", "titol, url, nomCategoria")

    insert_R_Contingut_TipusUsuari = INSERT.replace("tabla", "R_Contingut_TipusUsuari")
    insert_R_Contingut_TipusUsuari = insert_R_Contingut_TipusUsuari.replace("columnas", "idContingut, tipusUsuari")

    
    random = ''.join(rand.choice(string.ascii_uppercase + string.digits) for _ in range(3))

    urlData = "https://www.googleapis.com/youtube/v3/search?key={}&maxResults={}&part=snippet&type=video&q={}"
    urlData = urlData.format(api.api_key, 150, random)
    webURL = urllib.request.urlopen(urlData)
    data = webURL.read()
    encoding = webURL.info().get_content_charset('utf-8')
    results = json.loads(data.decode(encoding))

    
    i = 1
    for data in results['items']:
        videoId = (data['id']['videoId'])
        videoUrl = "www.youtube.com/watch?v="+videoId
        title = (data['snippet']['title'])
        nomCategoria = rand.choice(CATEGORIES)
        title=title.replace("\'","")
        print(title)
        print(i)
        insert_contingut = insert_contingut.replace(";", f', (\'{title}\',\'{videoUrl}\',\'{nomCategoria}\');')

        tipusUsuari = rand.choice(TIPUS_USUARIS)
        insert_R_Contingut_TipusUsuari = insert_R_Contingut_TipusUsuari.replace(";", f', (\'{i}\',\'{tipusUsuari}\');')
        i = i+1
    insert_contingut = insert_contingut.replace("VALUES ,", "VALUES ")
    insert_R_Contingut_TipusUsuari = insert_R_Contingut_TipusUsuari.replace("VALUES ,", "VALUES ")
    file.write(insert_contingut+ "\n")
    file.write(insert_R_Contingut_TipusUsuari+ "\n")


def generar_contracte(file):
    insert_contracte = INSERT.replace("tabla", "Contracte")
    insert_contracte = insert_contracte.replace("columnas", "dataAlta, dataVenciment,nomUsuari, tipusContracte")

    for i in range(NOMBRE_USUARIS):
        time_between_dates = end_date - start_date
        days_between_dates = time_between_dates.days
        random_number_of_days = rand.randrange(days_between_dates)
        dataAlta = start_date + datetime.timedelta(days=random_number_of_days)
        nomUsuari = usuaris[i]
        tipusContracte = rand.choice(TIPUS_CONTRACTE)
        if (TIPUS_CONTRACTE == 'Mensual'):
            dataVenciment = dataAlta + relativedelta(month=1)
        else:
            dataVenciment = dataAlta + relativedelta(month=3)
        insert_contracte = insert_contracte.replace(";", f', (\'{dataAlta}\',\'{dataVenciment}\',\'{nomUsuari}\',\'{tipusContracte}\');')
    insert_contracte = insert_contracte.replace("VALUES ,", "VALUES ")
    file.write(insert_contracte+ "\n")


def generar_favorits(file):
    insert_R_Contingut_Favorit = INSERT.replace("tabla", "R_Contingut_Favorit")
    insert_R_Contingut_Favorit = insert_R_Contingut_Favorit.replace("columnas", "idContracte, idContingut")

    insert_R_Categoria_Favorita = INSERT.replace("tabla", "R_Categoria_Favorita")
    insert_R_Categoria_Favorita = insert_R_Categoria_Favorita.replace("columnas", "idContracte, nomCategoria")

    for i in range(1, NOMBRE_USUARIS-1):
        videos = rand.sample(range(1, 50), 10)
        for j in range(10):
            video = videos[j]
            insert_R_Contingut_Favorit = insert_R_Contingut_Favorit.replace(";", f', (\'{i}\',\'{video}\');')

        categorias = rand.sample(range(0, len(CATEGORIES)-1), 5)
        for k in range(5):
            categoria = CATEGORIES[categorias[k]]
            insert_R_Categoria_Favorita = insert_R_Categoria_Favorita.replace(";", f', (\'{i}\',\'{categoria}\');')
            
    insert_R_Contingut_Favorit = insert_R_Contingut_Favorit.replace("VALUES ,", "VALUES")
    insert_R_Categoria_Favorita = insert_R_Categoria_Favorita.replace("VALUES ,", "VALUES")

    file.write(insert_R_Contingut_Favorit+ "\n")
   # file.write(insert_R_Categoria_Favorita+ "\n")


def main():
    with open('c:/Users/walli/OneDrive/Escritorio/UIB/3/bd/BBDDII/dev/data/prova2.txt', "w", encoding="utf-8") as f:
        faker = Faker('es_ES')
        # generar_constants(f)
        # generar_usuaris(f, faker)
        # generar_categoria(f)
        # generar_contingut(f)
        generar_contracte(f)
        # generar_favorits(f)
    pass


if __name__ == "__main__":
    main()
