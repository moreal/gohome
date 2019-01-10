class CorsMiddleware(object):

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        print('test')
        response = self.get_response(request)
        response['Access-Control-Allow-Origin'] = '*'
        return response
