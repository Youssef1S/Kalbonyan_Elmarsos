def plant_recommendation(care):
    # if care = 'low':  Syntax Error
    if care == 'low':
        print('aloe')
    elif care == 'medium':
        print('pothos')
    # elif care == 'medium': Logic Error
    elif care == 'high':
        print('orchid')

# plant_rec('low')   Runtime Error
plant_recommendation('low')
plant_recommendation('medium')
plant_recommendation('high')
