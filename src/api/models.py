# src/api/models.py

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    address = db.Column(db.String(200))  # Nueva propiedad: dirección
    phone = db.Column(db.String(20))    # Nueva propiedad: teléfono
    nationality = db.Column(db.String(50)) # Nueva propiedad: nacionalidad
    is_active = db.Column(db.Boolean(), default=True, nullable=False)
    is_admin = db.Column(db.Boolean(), default=False, nullable=False)  # Añadir el atributo is_admin
    
    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "address": self.address,  # Incluir dirección en la serialización
            "phone": self.phone,      # Incluir teléfono en la serialización
            "nationality": self.nationality, # Incluir nacionalidad en la serialización
            "is_active": self.is_active,
            "is_admin": self.is_admin  # Incluir is_admin en la serialización
           
        }
