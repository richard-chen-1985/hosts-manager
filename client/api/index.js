window.Api = {
    getData: function() {
        return hostsFile.getData()
    },
    saveData: function(str) {
        hostsFile.save(str)
    },
    saveJSON: function(json) {
        hostsFile.saveJSON(json)
    },
    getContent: function(projects) {
        let content = ''
        projects.forEach((project) => {
            if(project.active) {
                let groups = project.groups
                groups.forEach((group) => {
                    if(group.active) {
                        content += group.content + '\n'
                    }
                })
            }
        })
        return content
    }
}