import React from "react"
import Sidebar from "../components/sidebar"
import Project from "../components/project_info"
import PageTemplate from "../components/page_template"
export default () => (
    <PageTemplate sidebar={true} width="1000px">
        <Sidebar title="BFAssist">
                World of Warcraft Addon

                <p css={{marginBlockEnd:`0`}}>Github:</p>

                <span css={{display:`block`}}>
                <a href="https://github.com/spadespwnz/BFAssist">Addon Code</a>
                </span>
                <p>
                    LUA
                </p>
            </Sidebar>
            <Project>
                <p>
                BFAssist is an Add-on for the MMORPG World of Warcraft. The purpose of this Add-on is to make a automate some of the tedious interactions with 
                NPCs (Non Player Characters) when picking up, and completing quests. The main features include automatically accepting quests when a NPC offers them, to automatically 
                proceed through dialog options, to automatically turn-in completed quests.
                </p>
                <p>
                    The true power of this Add-on comes from its ability to choose the most powerful reward from the quest, and equip upgrades that are received. To do this, every possible 
                    reward is compared with the current item equipped for that item's slot, then the item that provides the highest increase is selected, and equipped.
                </p>
                <p>
                    For this functionality to work it must deal with a variety of complicated situations. For example, some items provide bonuses when used together, and to correctly find 
                    the best rewards the addon finds the best possible replacements for the gear within your bags and tests to see if it would be beneficial to replace the "sets" by equipping 
                    one of the quest rewards along with the best items from within bags. If an upgrade can be made the add-on will equip the required items automatically. Other special cases 
                    include dealing with rings, as multiple can be equipped at the same time, as well as handling special cases for all the different weapon types that character classes can use. 
                </p>
                <p>
                    Using this add-on allows the player to never worry about comparing quest items, or progress dialog with NPCs, as the entire process is automated.
                </p>
            </Project>
    </PageTemplate>
)