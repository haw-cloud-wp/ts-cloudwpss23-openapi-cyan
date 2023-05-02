#!/bin/sh
openapi-generator generate \
-i ../reference/v1api.yaml \
-g typescript-jquery \
-o .
#--additional-properties=library=apollo
