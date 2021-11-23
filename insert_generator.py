from faker import Faker
import random as rand
# url
import json
import urllib.request
import string


INSERT = "INSERT INTO tabla (columnas) VALUES ;"
NOMBRE_USUARIS = 10
NUM_TIPUS_USUARIS = 3
TIPUS_USUARIS = ['Menor', 'Adolescent', 'Adult']

usuaris = list()


def generar_constants(file, faker):
    insert_constants = INSERT.replace("tabla", "tipusUsuari")
    insert_constants = insert_constants.replace("columnas", "tipusUsuari")


def generar_usuaris(file, faker):
    insert_usuaris = INSERT.replace("tabla", "usuari")
    insert_usuaris = insert_usuaris.replace(
        "columnas", "nomUsuari, contrasenya, nom,llinatges, tipusUsuari")

    for i in range(NOMBRE_USUARIS):
        faker.unique
        usuario = faker.user_name()
        while usuario in usuaris:  # Nos aseguramos de que los usuarios sean unicos
            usuario = faker.user_name()
        usuaris.append(usuario)
        nombre = faker.first_name()
        apellido = faker.last_name()
        password = faker.password()
        tip = TIPUS_USUARIS[rand.randint(0, 2)]
        insert_usuaris = insert_usuaris.replace(
            ";", f', (\'{usuario}\',\'{password}\',\'{nombre}\',\'{apellido}\',\'{tip}\');')
    insert_usuaris = insert_usuaris.replace("VALUES ,", "VALUES ")
    file.write(insert_usuaris)


def generar_urls(file):
    count = 50
    API_KEY = 'your_key'
    random = ''.join(rand.choice(string.ascii_uppercase + string.digits)
                     for _ in range(3))

    urlData = "https://www.googleapis.com/youtube/v3/search?key={}&maxResults={}&part=snippet&type=video&q={}".format(
        API_KEY, count, random)
    webURL = urllib.request.urlopen(urlData)
    data = webURL.read()
    encoding = webURL.info().get_content_charset('utf-8')
    results = json.loads(data.decode(encoding))

    for data in results['items']:
        videoId = (data['id']['videoId'])
        print(videoId)


def generar_contracte(file):
    for i in range(rand.nextInt(NOMBRE_USUARIS)):
        pass


def generar_contingut(file):
    pass


def main():
    with open('inserts.txt', "w") as f:
        faker = Faker('es_ES')
        #generar_constants(file, faker)
        generar_usuaris(f, faker)


if __name__ == "__main__":
    main()
