

class Firebase{
  constructor(ref){
    this.ref = ref;
  }
  async add(obj,condition){
    const uuid = this.ref.push().key;
    var newObj;
    if(condition){
       newObj = {...obj,uuid,like:0}
    }
    else{
      newObj = {...obj,uuid}
    }
    await this.ref.push(newObj)
    return newObj;
  }
  async fetch(){
    const snap = await this.ref.once('value');
    return Object.values(snap.val());
  }
  async fetchOne(id){
    const snap = await this.ref.orderByChild('uuid').equalTo(id).once('child_added');
    return snap.val()
  }

  async delete(id){
    const snap = await this.ref.orderByChild('uuid').equalTo(id).once('child_added')
    await snap.ref.remove();
    return id
  }
  async update(obj){
    const snap = await this.ref.orderByChild('uuid').equalTo(obj.id)
    .once('child_added')
    return await snap.ref.update(obj);
  }
  async fetchRelation(id,relation_ref,child){
    const snap = await relation_ref.orderByChild(child).equalTo(id).once('value')
    return Object.values(snap.val())
  }
  async likeOne(id){
      const snap = await this.ref.orderByChild('uuid').equalTo(id).once('child_added');
        const snapshot = snap.val();
        const like = snapshot.like;
        return await snap.ref.update({like:like + 1})
  }
}


module.exports ={
  Firebase
}
