from faker import Faker
import random as rand
# url
import json
import urllib.request
import string
import api
import datetime
import hashlib

print(Faker.date.between('2015-01-01', '2015-01-05'))

INSERT = "INSERT INTO tabla (columnas) VALUES ;"
NOMBRE_USUARIS = 300
NUM_VIDEOS = 1500
TIPUS_USUARIS = ['Menor', 'Adolescent', 'Adult']
TIPUS_CONTRACTE = ['Mensual', 'Trimestral']
CATEGORIES = ['Acción', 'Actualidad', 'Adulto', 'Aventuras', 'Animación', 'Anime', 'Binge', 'Biografía', 'Ciencia ficción', 'Comedia', 'Concurso', 'Corto', 'Crimen', 'Deporte', 'Documental', 
              'Drama', 'Estilo de vida', 'Familiar', 'Fantasía', 'Ficción', 'Guerra', 'Historia', 'Horror', 'Infantil', 'Juvenil', 'Música', 'Musical', 'Misterio', 'Programa de entrevistas', 'Reality Show',
              'Romance', 'Sátira', 'Suspense', 'Western']
start_date = datetime.date(2015, 1, 1)
end_date = datetime.date(2021, 12, 31)
usuaris = list()

#TipusUsuari i tipusContracte
def generar_constants(file):
    insert_tipus_usuari = INSERT.replace("tabla", "tipusUsuari")
    insert_tipus_usuari = insert_tipus_usuari.replace("columnas", "tipusUsuari")
    insert_tipus_usuari = insert_tipus_usuari.replace(";","(\'menor\'),(\'adolescent\'),(\'adult\');")
    file.write(insert_tipus_usuari +"\n")
    insert_tipus_contracte = INSERT.replace("tabla", "tipusContracte")
    insert_tipus_contracte = insert_tipus_contracte.replace("columnas","tipus, preu")
    insert_tipus_contracte = insert_tipus_contracte.replace(";","(\'mensual\',15),(\'trimestral\',40);")
    file.write(insert_tipus_contracte + "\n")


def generar_usuaris(file, faker):
    insert_usuaris = INSERT.replace("tabla", "Usuari")
    insert_usuaris = insert_usuaris.replace(
        "columnas", "nomUsuari, contrasenya, nom, llinatges, tipusUsuari")
    
    usuari_contrassenya = ""
    
    for i in range(NOMBRE_USUARIS):
        usuario = faker.user_name()
        while usuario in usuaris:  # Nos aseguramos de que los usuarios sean unicos
            usuario = faker.user_name()
        usuaris.append(usuario)
        nombre = faker.first_name()
        apellido = faker.last_name()
        password = faker.password()
        usuari_contrassenya += nombre + "\t" + password + "\n"
        hashed_pass = hashlib.sha256(password.encode()).hexdigest()
        tip = TIPUS_USUARIS[rand.randint(0, 2)]
        insert_usuaris = insert_usuaris.replace(";", f', (\'{usuario}\',\'{hashed_pass}\',\'{nombre}\',\'{apellido}\',\'{tip}\');')
    insert_usuaris = insert_usuaris.replace("VALUES ,", "VALUES ")
    with open("contrassenyes.txt") as contras:
        contras.write(usuari_contrassenya)
    file.write(insert_usuaris)

def generar_categoria(file):
    insert_usuaris = INSERT.replace("tabla", "Categoria")
    insert_usuaris = insert_usuaris.replace("columnas", " nomCategoria")
    for i in range(CATEGORIES.len()):
        nomCategoria=CATEGORIES[i]
        insert_usuaris = insert_usuaris.replace(";", f', (\'{nomCategoria}\');')
    insert_usuaris = insert_usuaris.replace("VALUES ,", "VALUES ")
    file.write(insert_usuaris)

def generar_contingut(file):
    random = ''.join(rand.choice(string.ascii_uppercase + string.digits) for _ in range(3))
    
    urlData = "https://www.googleapis.com/youtube/v3/search?key={}&maxResults={}&part=snippet&type=video&q={}"
    urlData = urlData.format(api.api_key,NUM_VIDEOS, random)
    webURL = urllib.request.urlopen(urlData)
    data = webURL.read()
    encoding = webURL.info().get_content_charset('utf-8')
    results = json.loads(data.decode(encoding)) 
    
    insert_usuaris = INSERT.replace("tabla", "Contingut")
    insert_usuaris = insert_usuaris.replace(
        "columnas", "titol, url, nomCategoria")
    
    for data in results['items']: 
        videoId = (data['id']['videoId'])
        videoUrl="www.youtube.com/watch?v="+videoId
        title=(data['snippet']['title'])
        nomCategoria=rand.choice(CATEGORIES)
        
        insert_usuaris = insert_usuaris.replace(";", f', (\'{title}\',\'{videoUrl}\',\'{nomCategoria}\');')
    insert_usuaris = insert_usuaris.replace("VALUES ,", "VALUES ")
    file.write(insert_usuaris)

def generar_contracte(file, faker):
    insert_usuaris = INSERT.replace("tabla", "Contracte")
    insert_usuaris = insert_usuaris.replace("columnas", "dataAlta, nomUsuari, tipusContracte")
    
    for i in range(NOMBRE_USUARIS):
        time_between_dates = end_date - start_date
        days_between_dates = time_between_dates.days
        random_number_of_days = rand.randrange(days_between_dates)
        dataAlta = start_date + datetime.timedelta(days=random_number_of_days)
        nomUsuari=usuaris(i)
        tipusContracte=rand.choice(TIPUS_CONTRACTE)
        insert_usuaris = insert_usuaris.replace(";", f', (\'{dataAlta}\',\'{nomUsuari}\',\'{tipusContracte}\');')
    insert_usuaris = insert_usuaris.replace("VALUES ,", "VALUES ")
    file.write(insert_usuaris)



def main():
    # with open('data/inserts.txt', "w") as f:
    #     faker = Faker('es_ES')
    #     generar_constants(f)
    #     generar_usuaris(f, faker)
    #     generar_categoria(f)
    #     generar_contingut(f)
    pass    


if __name__ == "__main__":
    main()
