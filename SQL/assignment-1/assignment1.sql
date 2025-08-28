show databases;

use intern;

show tables;




create table Department_Naveen(
    dept_id varchar(10) ,
    dept_name varchar(50),
    primary key(dept_id)
);
show tables;
drop table accounts_mahesh;

describe Department_Naveen;

alter table Department_Naveen
modify  dept_name varchar(50) NOT NULL;

alter table Department
modify  dept_id varchar(20) NOT NULL;
insert into Department_Naveen values("D1","Computer Science"),("D2","Mathematics"),("D3","Physics");
insert into Department_Naveen values("D4","Social");
select * from Department_Naveen;

update courses_Naveen
set dept_id="D1"
where course_id="C2";


create table courses_Naveen(
course_id varchar(10) ,
course_name varchar(20),
dept_id varchar(10),
primary key(course_id),
foreign key (dept_id) references Department_Naveen(dept_id)
);

insert into courses_Naveen values("C1","Python","D1"),("C2","Java","D2"),("C3","CVRV","D2"),("C4","NMOD","D2"),("C5","Quantum Mathematics","D3");
select * from courses_Naveen;

select *
from Department_Naveen as d
right join courses_Naveen as c on d.dept_id=c.dept_id;

create table students_Naveen(
    student_id varchar(20) NOT NULL,
    student_name varchar(30) Not Null,
    dob Date default (Current_Date),
    age int default 0,
    dept_id varchar(20) ,
    primary key(student_id),
    foreign key  (dept_id) references Department_Naveen(dept_id)
);

show tables;


insert into students_Naveen(student_id,student_name,dob,age,dept_id) values("S1","Abdul","2002-04-06",24,"D1");


insert into students_Naveen(student_id,student_name,age,dept_id) values("S2","Shreyas",24,"D2");

insert into students_Naveen(student_id,student_name,dob,age,dept_id) values("S3","Ali","2002-04-06",24,"D1");

insert into students_Naveen(student_id,student_name,dob,age,dept_id) values("S4","Naveen","2004-04-06",20,"D1");

select * from students;

alter table courses_Naveen
add column duration int default 8;

select * from courses_Naveen;

alter table courses_Naveen
ADD unique (course_code);


update students
set student_name="sneha reddy"
where student_id="S2";

delete from courses
where course_id="C3";

select *
from students_Naveen
where age>21;

select student_name
from students_Naveen
order by age;

select *
from students_Naveen 
order by age
limit 2;

select d.dept_id,d.dept_name,count(s.student_id) as no_of_students
from Department_Naveen as d
left join students_Naveen as s on s.dept_id=d.dept_id
group by d.dept_id,d.dept_name;

select d.dept_id,d.dept_name,count(s.student_id) as no_of_students,ifnull(Round(avg(s.age)),0) as avg_age
from Department_Naveen as d
left join students_Naveen as s on s.dept_id=d.dept_id
group by d.dept_id,d.dept_name;

select max(age)as maximum_age ,min(age) as minimum_age
from students_Naveen ;


create table accounts_Naveen(
account_id varchar(10) primary key NOT NULL,
holder_name varchar(50) ,
balance int default 0

);
insert into accounts_Naveen values("34324E","ALICE",5000),("34343G","BOB","3000"),("23141E","CHARLIE",4000);


select * from accounts_Naveen;



start transaction;

update accounts_Naveen 
set balance=balance-1000
where account_id="34324E";

update accounts_Naveen
set balance=balance+1000
where account_id="34343G";


rollback;

select * from accounts;

start TRANSACTION;

update accounts_Naveen
set balance=balance-1000
where account_id="34324E";
savepoint after_debut;
 
update accounts_Naveen 
set balance=balance+1000
where account_id="34343G";


update accounts_Naveen 
set balance=balance+500
where account_id="23141E";

rollback to after_debut;

commit;

describe students_Naveen;

describe Department_Naveen;

select stu.student_name ,dept.dept_name as department_name
from students_Naveen as stu
join Department_Naveen as dept
on dept.dept_id=stu.dept_id;

select *
from students_Naveen as studs
where studs.age >(
select avg(age) 
from Department_Naveen  
group by dept_id
having studs.dept_id=dept_id );



with countstudentsperdepartment as(
select count(*) as no_of_students,dept.dept_name 
from Department_Naveen as dept 
left join students_Naveen  as stu
on dept.dept_id=stu.dept_id
group by dept.dept_id
)


select * from countstudentsperdepartment;

select * from courses_Naveen;

alter table courses_Naveen
add column course_code varchar(20);

select * from courses_Naveen;

update courses_Naveen
set course_code="CS101"
where course_id="C1";

update courses_Naveen
set course_code="CS102"
where course_id="C2";


update courses_Naveen
set course_code="Math103"
where course_id="C3";


update courses_Naveen
set course_code="Math104"
where course_id="C4";

update courses_Naveen
set course_code="Physics101"
where course_id="C5";

describe students_Naveen;

insert into courses_Naveen values("C6","OOPS through java","D1",5,"CS103");
insert into courses_Naveen values("C6","DSA","D1",16,"CS103");



select * from courses_Naveen;
describe courses_Naveen;


alter table courses_Naveen
add column credits int ;

ALTER TABLE courses_Naveen
ADD CONSTRAINT CHK_PersonAge CHECK (credits<=5 AND credits>=1);


update courses_Naveen
set credits=6
where course_id="C1";

update courses_Naveen
set credits=4
where course_id="C1";

alter table courses_Naveen
add constraint FK_courses_departments
foreign key (dept_id) references Department_Naveen(dept_id);

create or replace view studs_depts_details as 
select sn.student_name,dn.dept_name
from students_Naveen as sn
left join Department_Naveen as dn 
on sn.dept_id=dn.dept_id;

select * from studs_depts_details;

update studs_depts_details
set student_name="jadeja"
where student_name="Abdul";
select * from Department_Naveen;

select  count(s.student_id) as studentperdept,d.dept_id,d.dept_name from Department_Naveen d
left join students_Naveen s
on s.dept_id=d.dept_id
group by d.dept_id;




















