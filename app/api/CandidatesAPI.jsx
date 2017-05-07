
var actors = [
  { url: 'http://www.imdb.com/name/nm5211242/?ref_=nv_sr_1',
  photo: 'http://ppc-inc.com/wp-content/uploads/2014/03/Google-Face.jpg',
  name: 'Anthony Castellane',
  writer: '13',
  actor: '10',
  union: false,
  travel: true,
  passport: true
  },
  { url: 'http://www.imdb.com/name/nm0000234/?ref_=nv_cel_dflt_2',
  photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5Mzc4ODU0Ml5BMl5BanBnXkFtZTcwNjU1NTI0Mw@@._V1_UY317_CR12,0,214,317_AL_.jpg',
    name: 'Charlize Theron',
    writer: '23',
    actor: '1',
    union: false,
    travel: true,
    passport: true},
    { url: 'http://www.imdb.com/name/nm0000229/',
    photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1NjAzNzE1MV5BMl5BanBnXkFtZTYwNTk0ODc0._V1_UX214_CR0,0,214,317_AL_.jpg',
      name: 'Steven Speilberg',
      writer: '50',
      actor: '50',
      union: true,
      travel: true,
      passport: true},
    { url: 'http://www.imdb.com/name/nm0000210/?ref_=nv_sr_1',
    photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQzNjU3MDczN15BMl5BanBnXkFtZTYwNzY2Njc4._V1_UX214_CR0,0,214,317_AL_.jpg',
    name: 'Julia Roberts',
    writer: '5',
    actor: '10',
    union: false,
    travel: true,
    passport: true},
    { url: 'http://www.imdb.com/name/nm00f00093/?ref_=fn_al_nm_1',
    photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg',
      name: 'Brad Pitt',
      writer: '1',
      actor: '10',
      union: false,
      travel: true,
      passport: true},
      { url: 'http://www.imdb.com/name/nm0000158/?ref_=nv_sr_1',
      photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg',
      name: 'Tom Hanks',
      writer: '13',
      actor: '10',
      union: false,
      travel: true,
      passport: true},
        { url: 'http://www.imdb.com/name/nm0425005/?ref_=nv_sr_1',
          photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UX214_CR0,0,214,317_AL_.jpg',
        name: 'Dwayne Johnson',
        writer: '1',
        actor: '2',
        union: true,
        travel: false,
        passport: true}
];

module.exports = {

  filterActors: function(actor,writer,union,travel,passport){

    return actors.filter((person)=>{
      if(actor==='' || actor=== undefined|| isNaN(parseInt(actor))){
        actor='0';
      };
      if(writer==='' || writer=== undefined || isNaN(parseInt(writer))){
        writer='0';
      };
      if(union===undefined){
        union = false;
      };
      if(travel===undefined){
        travel = false;
      };
      if(passport===undefined){
        passport = false;
      };
      console.log(actor,person.actor,writer, person.writer,union,person.union,travel,person.travel,passport,person.passport);
      if((parseInt(person.writer) >= writer )&&( parseInt(person.actor)>= actor )&& (person.union === union || person.union)
        && (person.travel === travel || person.travel) && (person.passport || person.passport === passport)){
        return true;
      } else{
        return false;
      }
    });
  }
}
