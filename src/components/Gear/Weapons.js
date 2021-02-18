import React from 'react'


export default function Weapons(props) {
    return (
        <div>
            <h3>Choose Weapons:</h3>
        </div>
    )
}

/* 
    to get if item is proficient:
        call item equipment/[name]    
            get category with item.weapon_category+' '+item.equipment_category.index
            get index item.name+'s' lowercase and replace space with '-'
            if category or index in proficiency list then proficient
    to get proficient weapon list:
        look through proficiency_index list
        call proficiencies/index at each index
            category 
                examples
                    Simple weapons 
                    Martial weapons
                got to 
                    proficiencies/[category].references[0].url
                    display equipment list names and save index
                        equipment/[index]
            specific weapon 
                examples    
                    Longswords
                    Rapiers
                    Shortswords
                    Crossbows
                    Clubs, 
                    Daggers, 
                    Javelins, 
                    Maces, 
                    Quarterstaffs, 
                    Sickles, 
                    Spears, 
                    Darts, 
                    Slings
                    Scimitars
                display equipment list names and save index
                    equipment/[index]
                

    Crossbow, hand
        /api/equipment/
            /api/equipment/crossbow-hand
        /api/proficiencies/
            /api/proficiencies/crossbows-hand
        /api/classes/bard
        /api/classes/rogue
*/ 