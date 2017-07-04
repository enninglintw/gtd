$ rails g model tag title:string type:string color:integer; rake db:migrate

- Tag
  + title
    * string
  + type
    * string
      - areas
      - contacts
        + email address
          * string
        + skip email address for now
      - labels
      - add types: locations, objects, scenarios etc.
  + color
    * enum
      - red
      - orange
      - yellow
      - green
      - blue
      - purple
