$ rails g model todo title:string notes:text focus:boolean time:integer energy:integer due:date
$ rake db:migrate

- Todo
  + title
    * string

  + notes
    * text

  + focus
    * boolean

  + time
    * 5, 10, 15, 30, 45 mins
    * 1, 2, 3, 4, 6, 8 hrs
    * whoa nelly!
    * none

  + energy
    * low
    * medium
    * high
    * none

  + due
    * date
    * use date first, change to datetime later.

  + state
    * inbox
    * next
    * later
    * waiting
    * scheduled
    * someday

  + belongs_to project
    * standalone
    * customized projects

  + has_many and belongs_to tags
    * hint: tags (areas, contacts, labels) comma seperated
