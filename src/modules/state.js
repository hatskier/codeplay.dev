import Vue from 'vue'
import _ from 'lodash'
// import Utils from './utils'
import Blockchain from './blockchain'
import Lessons from '../modules/lessons'

let State = {
  // Fields
  solvedLessons: [],
  syncStatus: 'Synced',

  // Methods
  async loadStateFromBlockchain() {
    console.log('Loading state from blockchain')
    let lessons = await Blockchain.getSolvedLessons()
    if (!lessons) {
      lessons = []
    }
    Vue.set(this, 'solvedLessons', lessons)
  },

  async updateStateToBlockchain() {
    console.log(
      `Updating blockchain state with solvedLessons: ${this.solvedLessons}`)
    try {
      this.syncStatus = 'Syncing solved lessons'
      this.updatingStateInBlockchain = true;
      await Blockchain.saveSolvedLessons(this.solvedLessons)
      this.syncStatus = 'Synced'
    } catch (e) {
      console.error(e)
      this.syncStatus = 'Syncing failed'
    }
  },

  async addSolvedLesson(lessonName) {
    let newSolvedLessons = _.clone(this.solvedLessons)
    // To avoid duplication
    if (!newSolvedLessons) {
      newSolvedLessons = []
    }
    if (!newSolvedLessons.includes(lessonName)) {
      newSolvedLessons.push(lessonName)
    }
    // this.solvedLessons = newSolvedLessons
    Vue.set(this, 'solvedLessons', newSolvedLessons)
    await this.updateStateToBlockchain()
  },

  async resetProgress() {
    console.log('Resetting progress')
    Vue.set(this, 'solvedLessons', [])
    await this.updateStateToBlockchain()
  },

  // upsertContact(contact) {
  //   let res = this.defaultUpsert(contact, 'contacts', 'Contact')
  //   this.updateStateToBlockchain({ updateContacts: true })
  //   return res
  // },

  // removeContact(contact) {
  //   this.defaultRemove(contact, 'contacts', 'Contact')
  //   this.updateStateToBlockchain({ updateContacts: true })
  // },

  // upsertDebt(debt) {
  //   debt.amount = Number(debt.amount)
  //   let res = this.defaultUpsert(debt, 'debts', 'Debt')
  //   this.updateStateToBlockchain({ updateDebts: true })
  //   return res
  // },

  // removeDebt(debt) {
  //   this.defaultRemove(debt, 'debts', 'Debt')
  //   this.updateStateToBlockchain({ updateDebts: true })
  // },

  // defaultUpsert(el, collectionName, entityName) {
  //   console.log(`Updating ${entityName}`)
  //   console.log(el)
  //   Vue.set(this[collectionName], el.id, newEl)
  //   return newEl
  // },

  // defaultRemove(el, collectionName, entityName) {
  //   if (!el.id) {
  //     throw new Error(`${entityName} without id can not be removed`)
  //   }
  //   console.log(`Removing ${entityName}`)
  //   console.log(el)
  //   let newElems = _.clone(this[collectionName])
  //   delete newElems[el.id]
  //   Vue.set(this, collectionName, newElems)
  // }

  getProgressForUnit(unitName) {
    let lessonsForUnit = Lessons.lessons
      .filter(lesson => lesson.unit == unitName)
      .map(lesson => lesson.name)
    console.log(`${unitName} contains ${lessonsForUnit.length} lessons`)
    let solvedLessonsInUnit = _.intersection(lessonsForUnit, this.solvedLessons)
    console.log(`${unitName} contains ${solvedLessonsInUnit.length} solved lessons`)
    return {
      done: solvedLessonsInUnit.length,
      total: lessonsForUnit.length,
    }
  },

  getProgressForLesson(lessonName) {
    let res = { total: 1 }
    if (this.solvedLessons.includes(lessonName)) {
      res.done = 1
    } else {
      res.done = 0
    }
    return res
  },
}

export default State