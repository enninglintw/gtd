$ rails g model project title:string notes:text state:integer focus:boolean due:date actions_behaviour:integer
$ rake db:migrate

- Project
  + title
    * string

  + notes
    * text

  + state
    * enum
      - active
      - later
      - scheduled
      - someday

  + focus
    * boolean

  + due
    * date
    * use date first, change to datetime later.

  + actions_behaviour
    * enum
      - parallel
      - sequential

  + has_many todos

  + has_many and belongs_to tags
    * hint: tags (areas, contacts, labels) comma seperated
