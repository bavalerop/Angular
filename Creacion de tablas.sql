create table acomodacion(
 aco_id int not null primary key,
 aco_name varchar(50)
);

create table tipohab(
 thab_id int not null primary key,
 thab_name varchar(50)
);

create table ciudad(
 ciu_id int not null primary key,
 ciu_nom varchar(100) null
);

create table hotel(
 hot_nit int not null primary key,
 hot_nom varchar(100) null,
 hot_direc varchar(100) null,
 num_hab int not null,
 ciudad_cod int not null  references ciudad(ciu_id)
);

create table asig_acomodacion(
 thab_cod int not null  references tipohab(thab_id),
 aco_cod int not null  references acomodacion(aco_id),
 hot_cod int not null  references hotel(hot_nit),
 primary key(thab_cod,aco_cod)
);


insert into acomodacion values(1,'Sencilla');
insert into acomodacion values(2,'Doble');
insert into acomodacion values(3,'Triple');
insert into acomodacion values(4,'Cuadruple');

insert into tipohab values(1,'Estandar');
insert into tipohab values(2,'Junior');
insert into tipohab values(3,'Suite');

insert into ciudad values(1,'Bogotá');
insert into ciudad values(2,'Medellín');
insert into ciudad values(3,'Cali');
insert into ciudad values(4,'Barranquilla');
insert into ciudad values(5,'Villavicencio');


