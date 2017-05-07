
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
  photo: 'http://ppc-inc.com/wp-content/uploads/2014/03/Google-Face.jpg',
    name: 'Charlize Theron',
    writer: '13',
    actor: '10',
    union: false,
    travel: true,
    passport: true},
    { url: 'http://www.imdb.com/name/nm0000210/?ref_=nv_sr_1',
    photo: 'http://ppc-inc.com/wp-content/uploads/2014/03/Google-Face.jpg',
    name: 'Julia Roberts',
    writer: '13',
    actor: '10',
    union: false,
    travel: true,
    passport: true},
    { url: 'http://www.imdb.com/name/nm00f00093/?ref_=fn_al_nm_1',
    photo: 'http://ppc-inc.com/wp-content/uploads/2014/03/Google-Face.jpg',
      name: 'Brad Pitt',
      writer: '13',
      actor: '10',
      union: false,
      travel: true,
      passport: true},
      { url: 'http://www.imdb.com/name/nm0000158/?ref_=nv_sr_1',
      photo: 'http://ppc-inc.com/wp-content/uploads/2014/03/Google-Face.jpg',
      name: 'Tom Hanks',
      writer: '13',
      actor: '10',
      union: false,
      travel: true,
      passport: true},
        { url: 'http://www.google.com',
          photo: 'http://ppc-inc.com/wp-content/uploads/2014/03/Google-Face.jpg',
        name: 'Herminio Garcia',
        writer: '1',
        actor: '2',
        union: true,
        travel: false,
        passport: true}
];

module.exports = {

  filterActors: function(actor,writer,union,travel,passport){

    return actors.filter((person)=>{
      console.log(parseInt(person.writer) >= writer, parseInt(person.actor)>= actor , person.union === union
        ,person.travel === travel ,person.passport === passport)
      if(parseInt(person.writer) >= writer && parseInt(person.actor)>= actor && person.union === union
        && person.travel === travel && person.passport === passport){
        return true;
      } else{
        return false;
      }
    });
  }
}
