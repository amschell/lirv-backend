import admin, { ServiceAccount } from "firebase-admin";

const serviceAccount = {
  type: "service_account",
  project_id: "nichlabs",
  private_key_id: "c8bee9b081bd805c30a5b5ec770c7f712e1161c6",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCekrilRVIf8Um+\nM1AI+zUL+bFzcOIPsI8VEf60vikTQXAD14PzGGhWC+MEGDI1iMAxlenC/bMBMHmp\nTAenAkmZXdDspExKzfl7l7kYkR2/SU7tNaPEgugQpTc5hLCHf2KoYBDUERlcLA+h\n4IYavVyfOPRDI+rMtCnov7Gi72kqrG0X9R2rA9/CD0hH4yG8JYBA/GmEWntL/15V\nKP1NJLBekmgAVXhNeD73ha2WXUMQdKcQ6YOhbWws9FJ/ueHu065vhsXAkNjoNTZu\nGY/Qjc9szD5Nbck3dubTj6cyVEfYa9ZXDpr97p1NzoKB4WILE/rAtfvYudTuI2FK\nBImO/p3VAgMBAAECggEADQXAxwaAxnxG4X6ZH5+yXSEnRvMkhtl+//c6GxGfJxnB\nj03gjsh4mxEUq+ZTy0Hc13BNDKp6i/S1Qmdqx8xK4ImL6enalRhsw7mzpaDsl+QM\nk15LbHeRWM/vT4Mw3x526vEhY1UN0jFmeEALgKsqmIMxdh5p6YqQgtt+mleoeUH4\nvmjhMePNpbvQLfJVQANe18DSo7k0UCuroI5maOj7IZG/aPq8qSlEdC+WH8y3z+aA\nPKDZy49F+dioTmE+6ws/MT6+muePEKLJsSq3tyT7uk/77NLPIPL+KEcEwfCEZHZ6\nRDdhyrnSXJ5wUvokqfvXDw0nktxy1s05HcL4kov9YQKBgQDbSKZyYBGCgoUsWKZV\nYX3XwNi1k792HALykRjK2Bt0A8CkM9hp1rQDOeRd32wSw4jvP8KqsWoor0jWjMKn\nMX7g/SN+Csx1JNjenlGVQSo4f39T0eySvIIntv+wme4JLVPe0RGwcXlZl+Yo6NHi\n0xKMOOP/It0HYmfdbluDwgUhtQKBgQC5H8cfgWzDfu4RTqQOlYjxH295tbwzAK7l\nMnDoIC9WZvpi8vtJthVOiQJZeZEU79k2bO5+gywd01AIZD1m17C+J62AOe1gY3z1\nCGBN1mgF7hxiWBTPWsKv3rMKe8ilOlOdWrJQUDQQczHqkZ06B3QEsPIz4qPgrMqT\nzA4A66GfoQKBgQChN9Wf63+UG0+73eVUipvR3ye0v86ZEFkea4z1vVLZxdSBJNjs\nX3zzjkGWvqefWAE6HP+LLWrmRJDhpJWMBLjKw3GvvlK5oYCMk4tZl5Jp/VrojkNH\nUq7CcimkdldqidfKzp0ZwyO7uhDubNW61QIi88S0lLY6MqA4TWWdBi1trQKBgBde\ndJN8kg9HqaPTqpAQvl252yehEmXZ0zopmOkkjvU4QKlXBPO0IZJtZzeGShM7h88A\nB0c/JcWKFFNK3BlsZupKNfO23ElLpc2ExittQmplOX4MomveiC8NTMqo/5Yj+8Qk\nW9gZl8jv0cBLq25U3IdvEtQL6yYEifoIS0hAdoGhAoGBAIC5Q41MYLtSOAUnTWy5\n7SR72ceFaJ+8TUfu9JCwqbWaDNjHX9Roa7HngnbDc+u7WvU4zjdSomVtst9rR2c5\nqDi02NAvERDVR6q+Rn2RTvWWveSDJ+8z5O36TGFP8JVUeQUaArxFmp/IXSkxoy+F\n1oLK3mXeeI4/nhtPRX3f2Opo\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-bonre@nichlabs.iam.gserviceaccount.com",
  client_id: "107451668854105962406",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-bonre%40nichlabs.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

export const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
});
